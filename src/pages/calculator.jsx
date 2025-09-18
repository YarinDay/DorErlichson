import React, { useState, useRef, useEffect } from 'react';
import { Form, Radio, Select, Button, Input, ConfigProvider, Row, Col } from 'antd';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { Results } from '../cmps/Results.jsx';

const { Option } = Select;

const StyledForm = styled(Form)`
  .ant-form-item {
    direction: rtl !important;
    margin-bottom: 0;
  }
`;
const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormContainer = styled.div`
  background: linear-gradient(258deg, #3E3BC975 0%, #3DC7C980 100%);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;


const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const TDEECalculator = () => {
  const [form] = Form.useForm();
  const [tdee, setTdee] = useState(null);
  const [bmr, setBmr] = useState(null);
  const resultsRef = useRef(null); // Reference to the Results component
  const calculatorRef = useRef(null); // Reference to the Results component

  const activityFactors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    intense: 1.725,
    very_intense: 1.9,
  };

  const calculateBMR = (age, gender, height, weight) => {
    if (gender === 'male') {
      return (88.362 + 13.397 * weight + 4.799 * height - 5.677 * age) - 100;
    } else {
      return (447.593 + 9.247 * weight + 3.098 * height - 4.330 * age) - 100;
    }
  };

  const onFinish = (values) => {
    const { age, gender, height, weight, activity } = values;
    const calculatedBMR = calculateBMR(age, gender, height, weight);
    const calculatedTDEE = calculatedBMR * activityFactors[activity];
    setBmr(calculatedBMR.toFixed(2));
    setTdee(calculatedTDEE.toFixed(2));

    if (resultsRef.current) {
      setTimeout(() => {
        resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const elementTop = resultsRef.current.getBoundingClientRect().top;
        const elementHeight = resultsRef.current.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;

        if (elementHeight > windowHeight) {
          window.scrollBy(0, elementTop - 20);
        }
      }, 100);
    }
  };

  useEffect(() => {
    calculatorRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [calculatorRef])
  const onResetCalculator = () => {
    form.resetFields()
    setBmr(null)
    setTdee(null)
    calculatorRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  return (
    <ConfigProvider direction="rtl">
      <div className="app-home main-layout project-section" style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "center", alignItems: "center" }}>
        {tdee && bmr && !isMobile && <Col span={6}>
          <Results tdee={tdee} bmr={bmr} />
        </Col>}
        <Col span={isMobile ? 24 : 6}>
          <div className={`${isMobile && "process-container"} "headline-container"`}>
            <FormContainer ref={calculatorRef}>
              <Title>TDEE מחשבון</Title>
              <StyledForm
                form={form}
                layout="horizontal"
                onFinish={onFinish}
                initialValues={{
                  age: 25,
                  gender: 'male',
                  height: 180,
                  weight: 65,
                  activity: 'moderate',
                }}
              >
                <StyledCol>
                  <Form.Item
                    label="גיל"
                    name="age"
                    rules={[{ required: true, message: 'נא להזין את גילך!' }]}
                  >
                    <Input placeholder="הזינו את הגיל שלכם" type="number" min={18} max={80} />
                  </Form.Item>

                  <Form.Item
                    label="מין"
                    name="gender"
                    rules={[{ required: true, message: 'נא לבחור את מינך!' }]}
                  >
                    <Radio.Group>
                      <Radio value="male">גבר</Radio>
                      <Radio value="female">אישה</Radio>
                    </Radio.Group>
                  </Form.Item>

                  <Form.Item
                    label={`גובה בס"מ`}
                    name="height"
                    rules={[{ required: true, message: 'נא להזין את גובהך!' }]}
                  >
                    <Input placeholder='הזינו את הגובה שלכם בסנטימטרים' type="number" min={0} />
                  </Form.Item>

                  <Form.Item
                    label={`משקל בק"ג`}
                    name="weight"
                    rules={[{ required: true, message: 'נא להזין את משקלך!' }]}
                  >
                    <Input placeholder={`הזינו את המשקל שלכם בק"ג`} type="number" min={0} />
                  </Form.Item>

                  <Form.Item
                    label="רמת פעילות"
                    name="activity"
                    rules={[{ required: true, message: 'נא לבחור את רמת הפעילות שלך!' }]}
                  >
                    <Select>
                      <Option value="sedentary">יושבני: מעט או ללא פעילות</Option>
                      <Option value="light">קל: 1-3 פעמים בשבוע</Option>
                      <Option value="moderate">בינונית: 4-5 פעמים בשבוע</Option>
                      <Option value="intense">אינטנסיבית: יומית או 3-4 פעמים בשבוע</Option>
                      <Option value="very_intense">מאוד אינטנסיבית: 2+ שעות פעילות מוגברת</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Row align={"middle"} justify={"center"} style={{ gap: ".5rem" }}>
                      <Button color='red' type="primary" htmlType="submit">
                        חישוב
                      </Button>
                      <Button type="default" htmlType="reset" onClick={onResetCalculator}>
                        ניקוי
                      </Button>
                    </Row>
                  </Form.Item>
                </StyledCol>
              </StyledForm>

            </FormContainer>
          </div>
        </Col>
        <div ref={resultsRef}>
          {tdee && bmr && isMobile && <Results tdee={tdee} bmr={bmr} />}
        </div>
      </div>
    </ConfigProvider>
  );
};

export default TDEECalculator;

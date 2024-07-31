import React, { useState } from 'react';
import { Form, Radio, Select, Button, Input, ConfigProvider, Row, Col } from 'antd';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

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
  console.log(isMobile);
  const activityFactors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    intense: 1.725,
    very_intense: 1.9,
  };

  const calculateBMR = (age, gender, height, weight) => {
    if (gender === 'male') {
      return 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      return 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
    }
  };

  const onFinish = (values) => {
    const { age, gender, height, weight, activity } = values;
    const bmr = calculateBMR(age, gender, height, weight);
    const calculatedTDEE = bmr * activityFactors[activity];
    setTdee(calculatedTDEE.toFixed(2));
    console.log({ calculatedTDEE: calculatedTDEE.toFixed(2) });
  };

  return (
    <ConfigProvider direction="rtl">
      <div className="app-home main-view main-layout project-section">
        <div className='headline-container process-container'>
          <FormContainer>
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
                  rules={[{ required: true, message: 'Please input your age!' }]}
                >
                  <Input placeholder="הזינו את הגיל שלכם" type="number" min={18} max={80} />
                </Form.Item>

                <Form.Item
                  label="מין"
                  name="gender"
                  rules={[{ required: true, message: 'Please select your gender!' }]}
                >
                  <Radio.Group>
                    <Radio value="male">גבר</Radio>
                    <Radio value="female">אישה</Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item
                  label={`גובה בס"מ`}
                  name="height"
                  rules={[{ required: true, message: 'Please input your height!' }]}
                >
                  <Input placeholder='הזינו את הגובה שלכם בסנטימטרים' type="number" min={0} />
                </Form.Item>

                <Form.Item
                  label={`משקל בק"ג`}
                  name="weight"
                  rules={[{ required: true, message: 'Please input your weight!' }]}
                >
                  <Input placeholder={`הזינו את המשקל שלכם בק"ג`} type="number" min={0} />
                </Form.Item>

                <Form.Item
                  label="Activity"
                  name="activity"
                  rules={[{ required: true, message: 'Please select your activity level!' }]}
                >
                  <Select>
                    <Option value="sedentary">Sedentary: little or no exercise</Option>
                    <Option value="light">Light: exercise 1-3 times/week</Option>
                    <Option value="moderate">Moderate: exercise 4-5 times/week</Option>
                    <Option value="intense">Intense: daily exercise or intense exercise 3-4 times/week</Option>
                    <Option value="very_intense">Very intense: 2+ hours of elevated heart rate activity</Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Row align={"middle"} justify={"center"} style={{ gap: ".5rem" }}>
                    <Button color='red' type="primary" htmlType="submit">
                      חישוב
                    </Button>
                    <Button type="default" htmlType="reset" onClick={() => form.resetFields()}>
                      ניקוי
                    </Button>
                  </Row>
                </Form.Item>
              </StyledCol>
            </StyledForm>
          </FormContainer>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default TDEECalculator;

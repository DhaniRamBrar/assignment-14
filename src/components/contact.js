import React from 'react';
import styled from 'styled-components';
import Button from '../stories/Button/Button.tsx';  
import Dropdown from '../stories/DropDown/DropDown.tsx';  
import StyledLabel from '../stories/Label/Label.tsx';  
import Text from '../stories/Text/Text.tsx'; 
import CustomRadioButton from '../stories/RadioButton/RadioButton.tsx';  

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial, sans-serif';

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const FormField = styled.div`
  width: 100%;
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input, textarea, select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  textarea {
    height: 100px;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  width: 100%;
`;

function Contact() {
  return (
    <Container className="contact-page">
      <Text text="Contact Us" fontSize="24px" fontWeight="bold" />
      <FormField>
        <StyledLabel text="Your Email:" />
        <input type="email" style={{ padding: '10px', marginTop: '5px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
      </FormField>
      <Text text="Use the form below to send us a message." fontSize="16px" />
      <FormField>
        <StyledLabel text="Select Subject:" />
        <Dropdown options={['General Inquiry', 'Support', 'Feedback']} placeholder="Select Subject" />
      </FormField>
      <FormField>
        <StyledLabel text="Your Message:" />
        <textarea style={{ padding: '10px', marginTop: '5px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
      </FormField>
      <RadioGroup>
        <CustomRadioButton options={[{ label: 'Subscribe to newsletter', value: 'yes' }, { label: 'No, thanks', value: 'no' }]} name="newsletter" selectedColor="#007bff" hoverColor="#0056b3" />
      </RadioGroup>
      <Button label="Send Message" variant="default" size="medium" />
    </Container>
  );
}

export default Contact;

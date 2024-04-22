import './App.css';
import Image_Login from './Login_Templates/Image_LoginPage/Image_Login';
import Login from './Login_Templates/LoginPage/Login';
import Logo_Login from './Login_Templates/Logo_LoginPage/Logo_Login';
import { Form, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from './Signup_Templates/SignUpPage/SignUp';
import Logo_Otp_SignUp from './Signup_Templates/Logo_Otp_SignUpPage/Logo_Otp_SignUp';
import  Gender_SignUp  from './Signup_Templates/Gender_SignUpPage/Gender_SignUp';
import Google_SignUp from './Signup_Templates/Google_SignUpPage/Google_SignUp';
import Payment_Form from './Forms_Templates/PaymentForm_Template/Payment_Form';
import Simple_Form from './Forms_Templates/Registeration_Template/Registeration_Form';
import ContactForm  from './Forms_Templates/ContactForm_Template/ContactForm';
import { WorkShopReg_Form } from './Forms_Templates/WorkShop_Template/WorkShopReg_Form';
import MultipleCards from './Cards_Templates/MultipleCards_Template/MultipleCards';
import InvoiceForm  from './Forms_Templates/Invoice_Template/InvoiceForm';
import { FeedbackForm } from './Forms_Templates/Feedback_Template/FeedbackForm';
import ComplaintForm from './Forms_Templates/ComplaintForm_Template/ComplaintForm';
import SimpleSignUp from './Signup_Templates/SimpleSignUpPage/Simple_SignUp';
import SimpleLogin from './Login_Templates/SimpleLoginPage/SimpleLogin';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Logo_Login/>}/>
          <Route path='/image-loginpage' element={<Image_Login/>}/>
          <Route path='/loginpage' element={<Login/>}/>
          <Route path='/simple-login' element={<SimpleLogin/>}/>

          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/simple-signup' element={<SimpleSignUp/>}/>
          <Route path='/logo-otp-signup' element={<Logo_Otp_SignUp/>}/>
          <Route path='/gender-signup' element={<Gender_SignUp/>}/>
          <Route path='/google-signup' element={<Google_SignUp/>}/>

          <Route path='/payment-form' element={<Payment_Form/>}/>
          <Route path='/form' element={<Simple_Form/>}/>
          <Route path='/contact-form' element={<ContactForm/>}/>
          <Route path='/workshop-form' element={<WorkShopReg_Form/>}/>
          <Route path='/invoice-form' element={<InvoiceForm/>}/>
          <Route path='/feedback-form' element={<FeedbackForm/>}/>
          <Route path='/complaint-form' element={<ComplaintForm/>}/>

          <Route path='/multiple-cards' element={<MultipleCards/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

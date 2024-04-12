import React, { useState, useRef, useEffect } from "react";
import StudentSignup from "./student/StudentSignup"
import InstructorSignup from "./instructor/InstructorSignup"
import RadioWithCheck from "./radioCheck/RadioWithCheck"
import StudentFinalSignup from "./student/StudentFinalSignup";
import InstructorMiddleSignup from "./instructor/InstructorMiddleSignup";
import FinalInstructor from "./instructor/FinalInstructor";
import { IoArrowBack } from "react-icons/io5";

const Signup = (props) => {

  const loginRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [studentNextModal, setStudentNextModal] = useState(false);
  const [instructorMiddleModal, setInstructorMiddleModal] = useState(false)
  const [instructorFinalModal, setInstructorFinalModal] = useState(false)
  const [goBack, setGoback] = useState(false)
  const centerLogin = () => {
    const windowHeight = window.innerHeight;
    const loginHeight = loginRef.current.clientHeight;
    const topPosition = (windowHeight - loginHeight) / 2;
    loginRef.current.style.top = `${topPosition}px`;
    const bottomMargin = 50;

    loginRef.current.style.bottom = `${bottomMargin}px`;
  };
  useEffect(() => {
    centerLogin();
    window.addEventListener("resize", centerLogin());
    return () => window.removeEventListener("resize", centerLogin);
  }, []);
  // checkbox for changes modal start
  const [selectedOption, setSelectedOption] = useState("Student");
  // checkbox for changes modal end

  // student first page signup start
  const [studentSignup, setStudentSignup] = useState({
    studentFullName: '',
    studentEmail: '',
    studentPassword: ''
  })
  const [studentFinalformData, setStudentFinalFormData] = useState({
    image: '',
    country: '',
    currency: '',
    referralCode: '',
    agree: false,
  });
  // student first page signup end

  // instructor first page signup start
  const [instructorSignup, setInstructorSignup] = useState({
    instructorFullName: '',
    instructorEmail: '',

  })
  // instructor first page signup end

  // instructor middle page signup end
  const [instructorMiddleformData, setInstructorMiddleFormData] = useState({
    image: '',
    country: '',
    contactNumber: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });
  // instructor middle page signup end

  // instructor lastt page signup start
  const [finalInstructorformData, setFinalInstructorFormData] = useState({
    qualification: '',
    hours: '',
    income: '',
    currency: '',
    category: '',
    specialization: '',
    idProof: '',
    educationalDocs: '',
    agree: false,
  });
  // instructor lastt page signup start




  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const handleChaneIcon = () => {
    setShowPassword((data) => !data);
  };
  const NavigateOnLogin = (e) => {
    props.setShowLoginModal(true)
    props.setShowSignUpPage(false)
    props.setShowInstructorJoin(false)
  }
  const studentNextFunction = (e) => {

    e.preventDefault();
    setStudentNextModal(true);
    setGoback(true)
  };
  
  //instructor middle page  start
  const nextInstructorMiddlePage = (e) => {
    e.preventDefault()
    setInstructorMiddleModal(true)
    setGoback(true)
  }

  //instructor middle page  end

  //instructor final page  start
  const nextInstructorFinalPage = () => {
    setInstructorFinalModal(true)
    setInstructorMiddleModal(false)
    setGoback(true)
  }
  //instructor final page  end
  const handleGoBack = () => {
    if (selectedOption == "Student") {
      setStudentNextModal(false)
      setGoback(false)
    } else if (selectedOption == "Instructor" && instructorMiddleModal===true && instructorFinalModal === false ) {
      setInstructorMiddleModal(false)
      setGoback(false)

    } else if (selectedOption == "Instructor" && instructorMiddleModal===false && instructorFinalModal === true ) {
      setInstructorMiddleModal(true)
      setInstructorFinalModal(false)
      setGoback(true)

    }
  }
  useEffect(() => {
    if (selectedOption == "Student") {
      setGoback(false)
    } else if (selectedOption === "Instructor") {
      setGoback(false)
    }
  }, [selectedOption])
  return (

    <div ref={loginRef} className={`absolute bg-white p-6 rounded-lg  max-sm:max-w-[85%] max-lg:max-w-[85%] max-h-screen overflow-y-auto  ${instructorFinalModal ? 'w-[900px]' : 'w-96'}`} >
      <div
        className={`flex ${goBack?"justify-between":"justify-end"} items-center cursor-pointer`}

      >
        {goBack ?
          <button onClick={handleGoBack}><IoArrowBack /></button> : ""}
        <img onClick={() => props.setShowSignUpPage(false)} src={process.env.PUBLIC_URL + "/images/x.png"} alt="cross" />
      </div>

      <div className="flex justify-center flex-col items-center">
        <h2 className="font-semibold text-gray-900 text-2xl">Sign Up</h2>

        <div className="w-[220px] m-auto ">
          <p className="text-center text-gray-500 text-sm">
            lorem shhjsh jaskui hksakkj jhasysg usjushui sghg kjuuwu
          </p>
        </div>
      </div>

      {props.showInstructorJoin === false && studentNextModal === false && instructorMiddleModal === false && instructorFinalModal === false && (
        <div className="mt-8">
          <p className="block text-sm text-gray-900 font-semibold mb-4">
            Select Category
          </p>
          <RadioWithCheck
            handleOptionChange={handleOptionChange}
            selectedOption={selectedOption}
          />
        </div>
      )}
      {/* student part start */}
      {selectedOption === "Student" && studentNextModal === false && (
        <StudentSignup studentSignup={studentSignup} setStudentSignup={setStudentSignup} handleChaneIcon={handleChaneIcon} studentNextFunction={studentNextFunction} showPassword={showPassword} setShowPassword={setShowPassword} />

      )}
      {selectedOption === "Student" && studentNextModal == true && <StudentFinalSignup studentFinalformData={studentFinalformData} setStudentFinalFormData={setStudentFinalFormData} />}
      {/* student part end */}

      {/* instructor  part start */}
      {selectedOption === "Instructor" && instructorMiddleModal === false && instructorFinalModal === false && <InstructorSignup instructorSignup={instructorSignup} setInstructorSignup={setInstructorSignup} nextInstructorMiddlePage={nextInstructorMiddlePage} />}
      {selectedOption === "Instructor" && instructorMiddleModal === true && instructorFinalModal === false && <InstructorMiddleSignup nextInstructorFinalPage={nextInstructorFinalPage} instructorMiddleformData={instructorMiddleformData} setInstructorMiddleFormData={setInstructorMiddleFormData} handleChaneIcon={handleChaneIcon} showPassword={showPassword} setShowPassword={setShowPassword} />}
      {selectedOption === "Instructor" && instructorFinalModal === true && <FinalInstructor nextInstructorFinalPage={nextInstructorFinalPage} finalInstructorformData={finalInstructorformData} setFinalInstructorFormData={setFinalInstructorFormData} />}
      {/* instructor  part start */}

      <div className="flex justify-center items-center mt-4 mb-6">
        <p className="text-gray-500">
          Already on TeacherCool?<span className="text-blue-600 cursor-pointer" onClick={NavigateOnLogin}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;









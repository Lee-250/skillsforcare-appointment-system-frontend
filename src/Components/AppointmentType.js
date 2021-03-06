import { Heading, Select, GridCol, Button, ButtonArrow, BackLink, Breadcrumbs, InsetText} from 'govuk-react';
import {Link, useNavigate} from "react-router-dom";
import InputAppointmentType from './InputAppointmentType';
import {useState, useEffect} from 'react';
import NoChoiceError from './NoChoiceError';



  const AppointmentType = ({type, setType}) => {

  const [noChoice, setnoChoice] = useState(false);
  const navigate = useNavigate()
    

  const nextPage = () => {
    if (type === '') {
      setnoChoice(true)
      return // do nothing
    
    }else {
    navigate("../date"); // navigate to the page
    }
  }

  const previousPage = () => {
    navigate("../email");
  }

    return (
        <div>
            <GridCol setWidth="two-thirds">
            <Breadcrumbs>
            <Breadcrumbs.Link href="../">
              Home
            </Breadcrumbs.Link>
            <Breadcrumbs.Link href="./name">
            Add your name
          </Breadcrumbs.Link>
          <Breadcrumbs.Link href="./email">
            Add your email
          </Breadcrumbs.Link>
          <Breadcrumbs>
            Choose your appointment type
          </Breadcrumbs>
        </Breadcrumbs>
            <Heading size="XLARGE">Please choose the type of appointment you require:</Heading>
            {noChoice ? <NoChoiceError/> : null }
            <InputAppointmentType type={type} setType={setType} />
            {
              (type === "Training") 
              ? <InsetText>Note: "Training" is a paid option. You will be required to fill in your credit cards detail before we confirm your booking.</InsetText>
              : null
            }
            
                <Button
                  icon={<ButtonArrow />}
                  start
                  onClick={nextPage}
                >
                  Next
                </Button>

                <BackLink
                  href="#"
                  onClick={previousPage}
                >
                  Back
                </BackLink>
             
              
           
            </GridCol>
        </div>
    );
};

export default AppointmentType;
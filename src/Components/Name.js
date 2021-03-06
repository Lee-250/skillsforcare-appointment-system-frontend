import { Heading, InputField, GridCol, ButtonArrow, Button, BackLink, Breadcrumbs} from 'govuk-react';
import {Link, useNavigate} from "react-router-dom";
import InputName from "./InputName"
import {useState, useEffect} from 'react';
import BlankFieldError from './BlankFieldError';


const Name = ({name, setName}) => {

  const navigate = useNavigate()
  const [blankField, setblankField] = useState(false);



  const nextPage = () => {
    if (name === '') {
      setblankField(true)
      return 
    } else {
      navigate("../email");
    }
  }

  const previousPage = () => {
      navigate("/");
    }
  

    return (
        <div>
          <GridCol setWidth="two-thirds">
        <Breadcrumbs>
            <Breadcrumbs.Link href="../">
              Home
            </Breadcrumbs.Link>
            <Breadcrumbs>
            Add your name
          </Breadcrumbs>
        </Breadcrumbs>
            <Heading size="XLARGE">What is your name?</Heading>
            {blankField ? <BlankFieldError/> : null }
            <InputName name={name} setName={setName} />

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
            </GridCol> </div>
    );
};

export default Name;
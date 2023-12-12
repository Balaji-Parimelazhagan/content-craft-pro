import { Navigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";
import { signUpValidate } from "../../services/api/signUpValidate";

const Validate = () => {
  const validate = useParams();
  const {data, mutate} = signUpValidate();
  useEffect(() => {
    mutate({link: validate.id})
  },[validate.id])
  useEffect(() => {
    if (data) {
      Navigate({to: '/about-you'})
    }
  }, [data]);
  return <Loader />
}

export default Validate;
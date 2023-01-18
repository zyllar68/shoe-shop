import { Card } from "@/atoms";
import Image from "next/image";

// import images
import Logo from "@/assets/logo.svg";

const Register = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Card>
        <div className='flex justify-center'>
          <Image src={Logo} alt='sneakers' />
        </div>
      </Card>
    </div>
  );
};

export default Register;

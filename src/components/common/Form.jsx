
import { useForm } from 'react-hook-form';
import Button from './button';

export default function Form({Type}) {
  const { register, handleSubmit} = useForm({
    defaultValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
    },
  });
  

  function onSubmit(data){
    console.log(data);
  }
  
  return (
    <form className='w-full flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
      {Type=="SignUp" && (<input type="text" className='p-2 border-[var( --color-primary-border)] border-1 rounded-md' placeholder="First name" {...register("FirstName", {required: true, maxLength: 20})} />)}
      {Type=="SignUp" && (<input type="text" className='p-2  border-[var( --color-primary-border)] border-1 rounded-md' placeholder="Last name" {...register("LastName", {required: true, maxLength: 20})} />)}
      <input type="text" className='p-2  border-[var( --color-primary-border)] border-1 rounded-md' placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="password" className='p-2  border-[var( --color-primary-border)] border-1 rounded-md' placeholder="Password" {...register("Password", {required: true, minLength: 6, maxLength: 12})} />
      <Button className='bg-[var(--color-primary)]' onClick={onSubmit}>Login</Button>
    </form>
  );
}
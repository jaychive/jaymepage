import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { grey } from '@mui/material/colors'
import { TextField, ButtonBase, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import axios from 'axios';

function Form(props) {
  const [formValue, setFormValues] = useState({
    no: null,
    fo_language: [],
    fo_co_name: '',
    fo_name: '',
    fo_kakaoid: '',
    fo_email: '',
    fo_message: ''
  })

  const [isChecked, setIsChecked] = useState({
    frontend : false,
    publisher : false,
    pm : false,
    designer : false
  });

  const { register, handleSubmit, reset, formState, formState: { isSubmitting, isSubmitSuccessful, isDirty, errors }, value } = useForm({
    defaultValues: {
      no: null,
      fo_language: [],
      fo_co_name: '',
      fo_name: '',
      fo_kakaoid: '',
      fo_email: '',
      fo_message: ''
    }
  });

  const checkboxHandler = (e)=>{
    setIsChecked({
      ...isChecked,
      [e.target.value]: e.target.checked
    })
    console.log(isChecked);
  }

  const { frontend, publisher, pm, designer } = isChecked;


  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    setFormValues(data)

    // axios.post('/event2', { headers: { "Content-Type": `application/json` }, body: JSON.stringify(data) })
    //   .then(res => {
    //     if (res.data === '성공') {
    //       setFormValues(res.data)
    //       axios.get('/event2')
    //         .then(res => {
    //           let namedb = res.data
    //           console.log(namedb[0].name);
    //           alert(namedb[0].name + '님의 응모가 완료되었습니다.');
    //         })
    //         .catch(err => console.log(err))
    //     }
    //     else throw console.log("없어");
    //   })
    //   .catch(err => { console.log(err); })
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        no: null,
        fo_language: [],
        fo_co_name: '',
        fo_name: '',
        fo_kakaoid: '',
        fo_email: '',
        fo_message: ''
      });
      document.querySelectorAll('input[type="checkbox"]').forEach(v=>{
        v.checked=false;
      })
      setIsChecked({
        frontend : false,
        publisher : false,
        pm : false,
        designer : false
      })
    }
  }, [formState, formValue, reset]);

  return (
    <>
      <section id="form" style={{ backgroundColor: "white" }}>
        <h2 className="lexend text-3xl font-bold">CONTACT</h2>
        <img src="" alt="" className="d-block" />
        <div className='d-flex justify-content-center pt-5'>
          <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column" id='eventform'>
            <input type="hidden" name="fo_no" id="fo_no" {...register("fo_no")} />
            <FormGroup className="flex-row justify-content-between">
              <FormControlLabel control={<Checkbox
                name="fo_language"
                value="frontend"
                className="fo_language"
                checked={frontend}
                onClick={checkboxHandler}
                sx={{
                  color: grey[100],
                  '&.Mui-checked': {
                    color: grey[600],
                  },
                }}
                {...register("fo_language")}
              />} label="프론트엔드" labelPlacement="top" />
              <FormControlLabel control={<Checkbox
                name="fo_language"
                value="publisher"
                className="fo_language"
                checked={publisher}
                onClick={checkboxHandler}
                sx={{
                  color: grey[100],
                  '&.Mui-checked': {
                    color: grey[600],
                  },
                }}
                {...register("fo_language")}
              />} label="퍼블리셔" labelPlacement="top" />
              <FormControlLabel control={<Checkbox
                name="fo_language"
                value="pm"
                className="fo_language"
                checked={pm}
                onClick={checkboxHandler}
                sx={{
                  color: grey[100],
                  '&.Mui-checked': {
                    color: grey[600],
                  },
                }}
                {...register("fo_language")}
              />} label="기획자" labelPlacement="top" />
              <FormControlLabel control={<Checkbox
                name="fo_language"
                value="designer"
                className="fo_language"
                checked={designer}
                onClick={checkboxHandler}
                sx={{
                  color: grey[100],
                  '&.Mui-checked': {
                    color: grey[600],
                  },
                }}
                {...register("fo_language")}
              />} label="디자이너" labelPlacement="top" />

            </FormGroup>
            <TextField
              autoFocus
              name="fo_co_name"
              id="fo_co_name"
              placeholder="COMPANY NAME"
              aria-invalid={!isDirty ? undefined : errors.fo_co_name ? "true" : "false"}
              {...register("fo_co_name", {
                required: "필수 입력 사항입니다.",
              }
              )}
            />
            {errors.fo_co_name && <small role="alert">{errors.fo_co_name.message}</small>}
            <TextField
              name="fo_name"
              id="fo_name"
              placeholder="NAME"
              aria-invalid={!isDirty ? undefined : errors.fo_name ? "true" : "false"}
              {...register("fo_name", {
                required: "필수 입력 사항입니다.",
                minLength: {
                  value: 2,
                  message: "이름은 두 자 이상 입력해야 합니다.",
                }
              }
              )}
            />
            {errors.fo_name && <small role="alert">{errors.fo_name.message}</small>}
            <TextField
              name="fo_kakaoid"
              id="fo_kakaoid"
              placeholder="KAKAOTALK ID"
              aria-invalid={!isDirty ? undefined : errors.fo_kakaoid ? "true" : "false"}
              {...register("fo_kakaoid", {
                required: "필수 입력 사항입니다.",
              }
              )}
            />
            {errors.fo_kakaoid && <small role="alert">{errors.fo_kakaoid.message}</small>}
            <TextField
              name="fo_email"
              id="fo_email"
              placeholder='E-MAIL'
              aria-invalid={!isDirty ? undefined : errors.fo_email ? "true" : "false"}
              {...register("fo_email", {
                required: "필수 입력 사항입니다.",
                // pattern: {
                //   value: /\S+@\S+\.\S+/,
                //   message: "이메일 형식에 맞지 않습니다.",
                // }
              }
              )}
            />
            {errors.fo_email && <small role="alert">{errors.fo_email.message}</small>}
            <TextField
              name="fo_message"
              id="fo_message"
              placeholder="MESSAGE"
              aria-invalid={!isDirty ? undefined : errors.fo_message ? "true" : "false"}
              {...register("fo_message", {
                required: "필수 입력 사항입니다.",
              }
              )}
            />
            {errors.fo_message && <small role="alert">{errors.fo_message.message}</small>}
            <div className='d-flex justify-content-start'>
              <input type="checkbox" className='w-auto' required /><label className='ms-3'>개인정보 활용 동의</label>
            </div>
            <ButtonBase type="submit" className='submit w-100 text-white bg-secondary border-0 rounded py-3 mt-5' disabled={isSubmitting}>
              제출하기
            </ButtonBase>
          </form>
        </div>
      </section>
    </>
  );
}

export default Form;
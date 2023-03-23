import React, { useEffect, useState } from 'react';
import { useController, useForm } from "react-hook-form";
import { grey } from '@mui/material/colors'
import { TextField, ButtonBase, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import axios from 'axios';

function Form(props) {

  // default settings with useForm
  const { register, handleSubmit, reset, field, control, formState, formState: { isSubmitting, isSubmitSuccessful, isDirty, errors, value } } = useForm({
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

  // useController for Textfield components & update value
  const { field: fo_co_name } = useController({
    name: "fo_co_name",
    control: control,
    rules: { required: { value: true, message: "필수 입력 사항입니다." } }
  })

  const { field: fo_name } = useController({
    name: "fo_name",
    control: control,
    rules: {
      required: { value: true, message: "필수 입력 사항입니다." },
      minLength: {
        value: 2,
        message: "이름은 두 자 이상 입력해야 합니다.",
      }
    }
  })

  const { field: fo_kakaoid } = useController({
    name: "fo_kakaoid",
    control: control,
    rules: { required: { value: true, message: "필수 입력 사항입니다." } }
  })

  const { field: fo_email } = useController({
    name: "fo_email",
    control: control,
    rules: {
      required: { value: true, message: "필수 입력 사항입니다." },
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "이메일 형식에 맞지 않습니다.",
      }
    }
  })

  const { field: fo_message } = useController({
    name: "fo_message",
    control: control,
    rules: { required: { value: true, message: "필수 입력 사항입니다." } }
  })

  const [values, setValue] = useState({
    fo_co_name: fo_co_name.value,
    fo_name: fo_name.value,
    fo_kakaoid: fo_kakaoid.value,
    fo_email: fo_email.value,
    fo_message: fo_message.value
  });


  // handler for checkbox(fo_language)
  const [isChecked, setIsChecked] = useState({
    frontend: false,
    publisher: false,
    pm: false,
    designer: false
  });

  const checkboxHandler = (e) => {
    setIsChecked({
      ...isChecked,
      [e.target.value]: e.target.checked
    })
  }
  const { frontend, publisher, pm, designer } = isChecked;


  // when click the submit button
  const onSubmit = (data) => {
    alert(JSON.stringify(data))

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

  // clean up
  useEffect(() => {
    const co_name = document.querySelector('#fo_co_name')
    const _name = document.querySelector('#fo_name')
    const kakaoid = document.querySelector('#fo_kakaoid')
    const email = document.querySelector('#fo_email')
    const message = document.querySelector('#fo_message')

    values.fo_co_name && !errors.fo_co_name ? co_name.classList.add('on') : co_name.classList.remove('on')
    values.fo_name && !errors.fo_name ? _name.classList.add('on') : _name.classList.remove('on')
    values.fo_kakaoid && !errors.fo_kakaoid ? kakaoid.classList.add('on') : kakaoid.classList.remove('on')
    values.fo_email && !errors.fo_email ? email.classList.add('on') : email.classList.remove('on')
    values.fo_message && !errors.fo_message ? message.classList.add('on') : message.classList.remove('on')

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
      document.querySelectorAll('input[type="checkbox"]').forEach(v => {
        v.checked = false;
      })
      setIsChecked({
        frontend: false,
        publisher: false,
        pm: false,
        designer: false
      })
    }
  }, [formState, reset, values]);

  return (
    <>
      <section id="form" className="container bg-black">
        <h2 className="lexend text-3xl font-bold text-white">CONTACT</h2>
        <img src="" alt="" className="d-block" />
        <div className="d-flex justify-content-center pt-5">
          <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column px-1">
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
                    color: grey[100],
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
                    color: grey[100],
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
                    color: grey[100],
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
                    color: grey[100],
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
              onChange={(e) => {
                fo_co_name.onChange(e.target.value)
                setValue({ ...values, [e.target.name]: e.target.value })
              }}
              value={fo_co_name.value}
            />
            {errors.fo_co_name && <small role="alert">{errors.fo_co_name.message}</small>}
            <div className="d-flex">
              <div className="col-5">
                <TextField
                  name="fo_name"
                  id="fo_name"
                  placeholder="NAME"
                  aria-invalid={!isDirty ? undefined : errors.fo_name ? "true" : "false"}
                  onChange={(e) => {
                    fo_name.onChange(e.target.value)
                    setValue({ ...values, [e.target.name]: e.target.value })
                  }}
                  value={fo_name.value}
                />
                {errors.fo_name && <small role="alert">{errors.fo_name.message}</small>}
              </div>
              <div className="ml-4 col">
                <TextField
                  name="fo_kakaoid"
                  id="fo_kakaoid"
                  placeholder="KAKAOTALK ID"
                  aria-invalid={!isDirty ? undefined : errors.fo_kakaoid ? "true" : "false"}
                  onChange={(e) => {
                    fo_kakaoid.onChange(e.target.value)
                    setValue({ ...values, [e.target.name]: e.target.value })
                  }}
                  value={fo_kakaoid.value}
                />
                {errors.fo_kakaoid && <small role="alert">{errors.fo_kakaoid.message}</small>}
              </div>
            </div>
            <TextField
              name="fo_email"
              id="fo_email"
              placeholder='E-MAIL'
              aria-invalid={!isDirty ? undefined : errors.fo_email ? "true" : "false"}
              onChange={(e) => {
                fo_email.onChange(e.target.value)
                setValue({ ...values, [e.target.name]: e.target.value })
              }}
              value={fo_email.value}
            />
            {errors.fo_email && <small role="alert">{errors.fo_email.message}</small>}
            <TextField
              name="fo_message"
              id="fo_message"
              placeholder="MESSAGE"
              aria-invalid={!isDirty ? undefined : errors.fo_message ? "true" : "false"}
              onChange={(e) => {
                fo_message.onChange(e.target.value)
                setValue({ ...values, [e.target.name]: e.target.value })
              }}
              value={fo_message.value}
            />
            {errors.fo_message && <small role="alert">{errors.fo_message.message}</small>}
            <div className='d-flex justify-content-start'>
              <input type="checkbox" className="w-auto" required /><label className='my-3 ms-2 text-sm pretendard font-light'>개인정보 활용 동의</label>
            </div>
            <div className="pb-5">
              <ButtonBase type="submit" className='submit w-fit text-white py-3 px-4 mt-3 lexend' disabled={isSubmitting}>
                SUBMIT
              </ButtonBase>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Form;
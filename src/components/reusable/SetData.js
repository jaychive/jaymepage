import Reac, { useEffect, useState } from 'react';
import { useController } from "react-hook-form";

function SetData({control}) {
  const { field: fo_co_name } = useController({
    name: "fo_co_name",
    control,
    rules: { required: "필수 입력 사항입니다." }
  })

  const { field: fo_name } = useController({
    name: "fo_name",
    control,
    rules: {
      required: "필수 입력 사항입니다.",
      minLength: {
        value: 2,
        message: "이름은 두 자 이상 입력해야 합니다.",
      }
    }
  })

  const { field: fo_kakaoid } = useController({
    name: "fo_kakaoid",
    control,
    rules: { required: "필수 입력 사항입니다." }
  })

  const { field: fo_email } = useController({
    name: "fo_email",
    control,
    rules: {
      required: "필수 입력 사항입니다.",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "이메일 형식에 맞지 않습니다.",
      }
    }
  })

  const { field: fo_message } = useController({
    name: "fo_message",
    control,
    rules: { required: "필수 입력 사항입니다." }
  })

  return {fo_co_name, fo_name, fo_kakaoid, fo_email, fo_message}

}

export default SetData;
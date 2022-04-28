import React, { useState, useCallback, forwardRef } from "react";
import { TextInputMask, TextInputMaskProps } from "react-native-masked-text";

import Input from "../Input";

interface InputMaskType extends TextInputMaskProps {
  name: string;
}

const InputMask = (
  { type, ...rest }: InputMaskType,
  inputRef: React.ForwardedRef<TextInputMask>
) => {
  const [text, setText] = useState("");
  const [rawText, setRawText] = useState("");

  const handleChangeText = useCallback((maskedText, unmaskedText) => {
    setText(maskedText);
    setRawText(unmaskedText);
  }, []);

  return (
    <TextInputMask
      type={type}
      includeRawValueInChangeText
      value={text}
      onChangeText={handleChangeText}
      customTextInput={Input}
      customTextInputProps={{
        ref: inputRef,
        rawText,
        onInitialData: setText,
      }}
      {...rest}
    />
  );
};

export default forwardRef(InputMask);

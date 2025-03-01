import { FormikProps } from 'formik';

interface InputProps<T> {
  name: keyof T;
  label: string;
  formik: FormikProps<T>;
}

export function TextArea<T>({ name, label, formik }: InputProps<T>) {
  const value = formik.values[name];
  return (
    <div style={{ marginBottom: 10 }}>
      <label htmlFor={String(name)}>{label}</label>
      <br />
      <textarea
        onChange={(e) => {
          void formik.setFieldValue(String(name), e.target.value);
        }}
        value={String(value)}
        name={String(name)}
        id={String(name)}
      />
    </div>
  );
}

import { FormikProps } from 'formik';

interface InputProps<T> {
  name: keyof T;
  label: string;
  formik: FormikProps<T>;
}

export function TextArea<T>({ name, label, formik }: InputProps<T>) {
  const value = formik.values[name];
  const error = formik.errors[name] as string | undefined;

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
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

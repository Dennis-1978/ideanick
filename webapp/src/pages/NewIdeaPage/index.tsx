import { Segment } from '../../components/Segment';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextAria';
import { useFormik } from 'formik';

export const NewIdeaPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      nick: '',
      description: '',
      text: '',
    },
    validate: (values) => {
      const errors: Partial<typeof values> = {};
      if (!values.name) {
        errors.name = 'Name is required';
      }
      if (!values.nick) {
        errors.nick = 'Name is required';
      } else if (!values.nick.match(/^[a-z0-9-]+$/)) {
        errors.nick = 'Nick may contain only lowercase letter, numbers and dashes';
      }
      if (!values.description) {
        errors.description = 'Description is required';
      }
      if (!values.text) {
        errors.text = 'Text is required';
      } else if (values.text.length < 10) {
        errors.text = 'Text should be at least 100 characters long';
      }

      return errors;
    },
    onSubmit: (values) => {
      console.info('Submitted', values);
    },
  });

  console.log(formik);

  return (
    <Segment title="New Idea">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <Input name="name" label="Name" formik={formik} />
        <Input name="nick" label="Nick" formik={formik} />
        <Input name="description" label="Description" formik={formik} />
        <TextArea name="text" label="Text" formik={formik} />

        <button type="submit">Create Idea</button>
      </form>
    </Segment>
  );
};

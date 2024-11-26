import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css'



export default function ContactForm() {
    return (
      <Formik initialValues={{ name: '', phone: '' }} onSubmit={() => {}}>
        <Form className={css.form}>
            <label className={css.label} htmlFor="name">Name</label>
            <Field className={css.field} type="text" name="name" />
            <label className={css.label} htmlFor="phone">Phone</label>
            <Field className={css.field} type="tel" name="phone" />
          <button className={css.btn} type="submit">Submit</button>
        </Form>
      </Formik>
    );
  };
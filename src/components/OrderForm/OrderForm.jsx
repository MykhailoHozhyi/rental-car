import { Field, Form, Formik } from 'formik';
import css from './OrderForm.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Btn from '../Btn/Btn';

const initialValues = {
  username: '',
  email: '',
  date: null,
  comment: '',
};

function OrderForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.formBox}>
      <div className={css.formTitleBox}>
        <h3 className={css.formTitle}>Book your car now</h3>
        <p className={css.formText}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form className={css.form}>
            <Field
              className={css.formInput}
              type="text"
              name="username"
              placeholder="Name"
            />
            <Field
              className={css.formInput}
              type="email"
              name="email"
              placeholder="Email"
            />
            <DatePicker
              className={css.formInput}
              wrapperClassName={css.datepickerWrapper}
              selected={values.date}
              onChange={val => setFieldValue('date', val)}
              dateFormat="dd-MM-yyyy"
              placeholderText="Booking date"
              portalId="root"
            />
            <Field
              className={`${css.formInput} ${css.textarea}`}
              as="textarea"
              name="comment"
              placeholder="Comment"
            />

            <Btn size="small" type="submit">
              Send
            </Btn>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default OrderForm;

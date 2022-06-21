import React, { useContext } from "react"
import { GlobalContext } from "../context/State"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  text: Yup.string().required("La description est obligatoire").min(3, "La description doit avoir au minimum 3 caractères"),
  amount: Yup.number().typeError("Veuillez saisir un nombre entier").nullable(false).required("Le montant est obligatoire")
})

export const AddTransaction = () => {

  const { addTransaction } = useContext(GlobalContext)

  const initialValues = {
    text: "",
    amount: 0
  }

  function expenseSubmit(formValues) {
    const { text, amount } = formValues

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    }

    addTransaction(newTransaction)
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={expenseSubmit}>
        {
          (formik) => (
            <Form>
              <div className="card p-4">
              <h5>New expense</h5>
                <div className="form-group">
                  <label htmlFor="text">Description</label>
                  <Field name="text" type="text" className="form-control" />
                  <ErrorMessage name="text" className="text-danger" component="span" />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="amount">Amount (€)</label>
                  <Field name="amount" type="number" className="form-control" />
                  <ErrorMessage name="amount" className="text-danger" component="span" />
                </div>
                <button className="btn btn-primary"
                  disabled={! formik.isValid}>Add expense</button>
              </div>
            </Form>
          )
        }
      </Formik>
    </>
  )
}
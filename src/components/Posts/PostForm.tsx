import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import s from '../Authorisation/Authorisation.module.css'
import styles from './PostForm.module.css'
import { Container } from '@material-ui/core';
import { FormTextField } from "../../common/compon/Material/TextInputComponent";
import { postNewPost } from "../../redux/posts/postsT";

export interface PostFormType {
    title: string
    body: string
}

export const PostForm: React.FC = () => {
    const d = useDispatch()
    const unSuccessMessage = useSelector((state: RootState) => state.common.authErrorMessage)
    const SignupSchema = Yup.object().shape({
        title: Yup.string().required('Required'),
        body: Yup.string().required('Required')
    });

    return <Formik onSubmit={(values: PostFormType, {resetForm}) => {
        d(postNewPost(values))
        console.log(values)
        resetForm()
    }}
       validationSchema={SignupSchema}
       initialValues={{
           title: '',
           body: ''
       }}>
        {({errors, touched}) => (
            <Form>
                <Container className={styles.background}>
                    <h1 className={styles.toCenter}>Creating New Post</h1>
                    <div className={s.myFrom}>
                        <div>
                            <Field name="title"
                                   type="text"
                                   placeholder={"Title"}
                                   component={FormTextField}
                            />
                        </div>
                        <div>
                            <Field name="body"
                                   placeholder={"Body"}
                                   type={'textarea'}
                                   component={FormTextField}
                            />
                        </div>
                    </div>
                    <div className={s.errorMessage}>{unSuccessMessage}</div>
                    <button className={styles.button} type="submit">Submit</button>
                </Container>
            </Form>
        )}
    </Formik>
}

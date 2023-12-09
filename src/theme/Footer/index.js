import React, {useEffect} from 'react';
import Footer from '@theme-original/Footer';

import { FeedbackButton } from 'pushfeedback-react';
import { defineCustomElements } from 'pushfeedback/loader';
import 'pushfeedback/dist/pushfeedback/pushfeedback.css';

export default function FooterWrapper(props) {

useEffect(() => {
    if (typeof window !== 'undefined') {
    defineCustomElements(window);
    }
}, []);



return (
    <>
    <FeedbackButton project="p9yybfxydz" button-position="bottom-right"  modal-position="bottom-right" button-style="light">Dela feedback</FeedbackButton>
    <Footer {...props} />
    </>
)
}  
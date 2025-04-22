import React, { useState } from 'react';
import './questions.css';
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const { t } = useTranslation();

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={"myQuestions m-auto"}>
           <div className={"innerQuestion w-full "}>
           <div>
                <h1 className={"myTitleQuestion flex gap-2 mx-1"}>
                    <svg className="h-9 w-9 text-white-50" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path
                            d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                    </svg>
                    {t('faqs.title')}
                </h1>
            </div>
            <div className={"flex flex-wrap gap-10 m-auto"}>
                <div className={"faq-item"}>
                    <Accordion defaultActiveKey="">
                        <Accordion.Item className='{"accardion"}' eventKey="0" >
                            <Accordion.Header>{t('faqs.faq_title1')}</Accordion.Header>
                            <Accordion.Body>
                                {t('faqs.faq_descr1')}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="accordion-item-custom">
                            <Accordion.Header>{t('faqs.faq_title2')}</Accordion.Header>
                            <Accordion.Body>
                                {t('faqs.faq_descr2')}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="accordion-item-custom">
                            <Accordion.Header>{t('faqs.faq_title3')}</Accordion.Header>
                            <Accordion.Body>
                                {t('faqs.faq_descr3')}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="accordion-item-custom">
                            <Accordion.Header>{t('faqs.faq_title4')}</Accordion.Header>
                            <Accordion.Body>
                                {t('faqs.faq_descr4')}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className={"faq-item"}>
                    <Accordion defaultActiveKey="">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{t('faqs.faq_title5')}</Accordion.Header>
                            <Accordion.Body>
                                {t('faqs.faq_descr5')}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>{t('faqs.faq_title6')}</Accordion.Header>
                            <Accordion.Body>
                                {t('faqs.faq_descr6')}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>{t('faqs.faq_title7')}</Accordion.Header>
                            <Accordion.Body>
                                {t('faqs.faq_descr7')}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" >
                            <Accordion.Header className={"bg-blue-900"}>{t('faqs.faq_title8')}</Accordion.Header>
                            <Accordion.Body >
                                {t('faqs.faq_descr8')}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>

           </div>
        </div>


    );
};

export default FAQ;

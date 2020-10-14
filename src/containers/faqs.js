import React from "react";
import faqqsData from "../fixtures/faqs.json";
import { Accordion } from "../components";
import OptForm from "../components/opt-form";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item></Accordion.Item>

      <OptForm>
        <OptForm.Input placeholder='Email Address' />
        <OptForm.Button>Try It Now!</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>Ready To Watch? Enter Your Email to Creat or Restart Your Membership</OptForm.Text>
      </OptForm>
    </Accordion>
  );
}

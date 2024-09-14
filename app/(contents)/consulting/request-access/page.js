/** @format */
import Form from "@/components/form";
import { requestConsultingAccess } from "@/server/actions/request-consulting-access";

export default function ConsultingAccess() {
  return (
    <>
      <h1>Request Consulting Access</h1>
      <Form action={requestConsultingAccess}>
        <label htmlFor="email">Email</label>
        <input name="email" id="email" />
        <br />
        <label htmlFor="first-name">First Name</label>
        <input type="first-name" name="first-name" id="first-name" />
        <br />
        <label htmlFor="last-name">Last Name</label>
        <input type="last-name" name="last-name" id="last-name" />
        <br />
        <label htmlFor="country">Country</label>
        <input type="country" name="country" id="country" />
        <br />
        <button>Request Access</button>
      </Form>
    </>
  );
}

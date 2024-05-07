export const useMail = () => {
  const sendMail = async (mail: any) => {
    const response = await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(mail),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  }

  const sendContactForm = async (mail: any) => {
    // console.log('mail: ', JSON.stringify(mail))
    const response = await useFetch('/api/mail/contact', {
      method: 'POST',
      body: mail,
    });
    const data = await response;
    return data;
  }

  const sendDemoForm = async (mail: any) => {
    // console.log('mail: ', JSON.stringify(mail))
    const response = await useFetch('/api/mail/demo', {
      method: 'POST',
      body: mail,
    });
    const data = await response;
    return data;
  }

  const sendPartnerForm = async (mail: any) => {
    // console.log('mail: ', JSON.stringify(mail))
    const response = await useFetch('/api/mail/partner', {
      method: 'POST',
      body: mail,
    });
    const data = await response;
    return data;
  }

  const sendSupportForm = async (mail: any) => {
    // console.log('mail: ', JSON.stringify(mail))
    const response = await useFetch('/api/mail/support', {
      method: 'POST',
      body: mail,
    });
    const data = await response;
    return data;
  }

  return {
    sendMail,
    sendContactForm,
    sendDemoForm,
    sendPartnerForm,
    sendSupportForm
  }
}
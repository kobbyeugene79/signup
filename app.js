const { createApp, ref } = Vue

createApp({
  
  setup(props, context){
    const showThankYou = ref(false)
    const username = ref('')
    const telPhone = ref('')
    const eMail = ref('')
    const theLocation = ref('')


    const sendInfo = () =>{
      context.emit('submitInput' , (username.value, telPhone.value, eMail.value, theLocation.value))
    }

    return {
      showThankYou,
      username,
      telPhone,
      eMail,
      theLocation,
      sendInfo
    }
    emit: ['submitInput']
  }
}).mount('#app')
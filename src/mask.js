import './css/style.css'
import IMask from 'imask'

const input_text_pattern = IMask(document.getElementById('input_text'), {
  mask: /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
})

var phoneMask = IMask(document.getElementById('tel'), {
  mask: '+{55}(00)00000-0000'
})

import Swal from 'sweetalert2';


const TITLE_ERROR = 'Error';
const TITLE_INFO = 'Info';
const TITLE_OK = 'Ok';
const TITLE_SUCCESS = 'SUCCESS';
const INVALID_OR_MISSING_FIELDS = 'there are invalid fields or missing fields to fill, please check!';
const CONTACT_SUPPORT = 'Something went wrong, please contact support!';

const show_popup = (title: string, message: string) => {
  return Swal.fire({
    title: title,
    confirmButtonText: 'OK',
    confirmButtonColor: '#4facff',
    customClass: {
      popup: 'sweet-customized-popup',
      actions: 'sweet-customized-actions',
      confirmButton: 'sweet-customized-confirm-button',
    },
    text: message,
  })
};

export {
  show_popup,
  TITLE_ERROR,
  TITLE_INFO,
  INVALID_OR_MISSING_FIELDS,
  CONTACT_SUPPORT,
  TITLE_OK,
  TITLE_SUCCESS
};

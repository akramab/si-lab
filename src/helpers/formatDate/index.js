import moment from 'moment';
import 'moment/locale/id';

export function formatDate (date, split=',',zone='WIB') {
  moment.locale('id');
  return moment(date).format(`DD MMM YYYY${split} hh:mm`) + ` ${zone}`;
}

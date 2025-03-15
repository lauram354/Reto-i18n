import React from "react";
import {FormattedDate, FormattedMessage, FormattedNumber} from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <th scope="row">    
         {props.offer.id}        
      </th>
      <td>
        <FormattedMessage
            id = {`name.${props.offer.id}`}
          />
      </td>
      <td>
        <FormattedMessage
              id = {`company.${props.offer.id}`}
            />
      </td>
      <td>
        <FormattedMessage
          id="salary.plural"
          values={{ value: props.offer.salary }}
        />
      </td>
      <td>
        <FormattedMessage
              id = {`city.${props.offer.id}`}
            />
      </td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber
          value ={props.offer.views}
          useGrouping= {true}
        />

      </td>
    </tr>
  );
};

export default Job;

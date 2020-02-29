/* eslint-disable no-unused-vars */
import React from 'react';

function Results (props){
  if (props.response.Headers) {
    return (
      <section>
        {JSON.stringify(props.response ,null , '\t')}
      </section>
    );
  }else return <section></section>;
}
export default Results;
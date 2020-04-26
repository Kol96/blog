import React from 'react';
import styles from './index.less';

export default () => (
  <table className={styles.autoTable}>
    <colgroup>
      <col width="100" />
      <col width="100" />
    </colgroup>
    <tbody>
      <tr>
        <td>hello world</td>
        <td>hello world</td>
        <td>hello world! hello world! hello world! hello world!</td>
        <td>hello world! hello world! hello world! hello world!</td>
      </tr>
    </tbody>
  </table>
);

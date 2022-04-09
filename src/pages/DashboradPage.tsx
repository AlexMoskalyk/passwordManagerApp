import React from 'react';
import DataList from '../components/dataList/DataList';
import IRecords from '../interfaces/Data.interface';
import DataItemEditor from '../components/dataItemEditor/DataItemEditor';

interface Props {
  records: IRecords[];
  showPassword: boolean;
  deleteDataItem: (id: string) => void;
  addDataItem: (record: IRecords) => void;
  togglePassword: () => void;
}

const DashboradPage = ({
  records,
  showPassword,
  deleteDataItem,
  addDataItem,
  togglePassword,
}: Props) => {
  return (
    <>
      <DataItemEditor
        records={records}
        addDataItem={addDataItem}
        togglePassword={togglePassword}
      />
      <DataList
        records={records}
        showPassword={showPassword}
        deleteDataItem={deleteDataItem}
      />
    </>
  );
};

export default DashboradPage;

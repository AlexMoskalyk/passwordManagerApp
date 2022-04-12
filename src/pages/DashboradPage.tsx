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
  updateItem: (id: string, record: IRecords) => void;
}

const DashboradPage = ({
  updateItem,
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
        updateItem={updateItem}
        records={records}
        showPassword={showPassword}
        deleteDataItem={deleteDataItem}
      />
    </>
  );
};

export default DashboradPage;

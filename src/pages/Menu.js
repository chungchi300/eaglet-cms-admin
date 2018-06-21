// in Menus.js
import React from 'react'
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  DateField,
  TextField,
  EditButton,
  DisabledInput,
  TextInput,
  LongTextInput,
  DateInput
} from 'react-admin'
import { getPriorities } from 'helpers/util'
import RichTextInput from 'ra-input-rich-text'
export const MenuList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="url" />
      <EditButton basePath="/Menu" />
    </Datagrid>
  </List>
)

const MenuTitle = ({ record }) => {
  return <span>Menu {record ? `"${record.name}"` : ''}</span>
}

export const MenuEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <TextInput source="url" />
      <SelectInput source="priority" choices={getPriorities()} />
      <ReferenceInput source="parentId" reference="menu">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
)

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }],

  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['link', 'image'], // add's image support
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ['clean'] // remove formatting button
]

export const MenuCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="url" />
      <SelectInput source="priority" choices={getPriorities()} />
      <ReferenceInput source="parentId" reference="menu">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
)

import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  padding: 20;
  margin: 20px 0 0 0;
  background-color: #d3d3d3;
`

export const Body = styled.View`
  flex: 1;
`
export const List = styled.FlatList`
  flex: 1;
  margin: 5px 0 0 0;
`

export const ContainerList = styled.View`
  margin: 0 0 5px 0;
  padding: 15px;
  border-radius: 4px;
  background-color: #fff;
  flex-direction: row;
  border: 1px solid #000;
  justify-content: 'space-between';
`

export const Title = styled.Texr`
  font-size: 14px;
  font-weight: bold;
  text-align: 'center';
`

export const Icon = styled.TouchableOpacity``;

export const Form = styled.View`
  padding: 0;
  height: 60px;
  justify-content: 'center';
  align-self: 'stretch';
  flex-direction: 'row';
  padding: 13px 0 0;
  border-top-width: 10px;

`


export const InputTask = styled.TextInput`
`;
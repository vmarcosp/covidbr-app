import styled, { createGlobalStyle } from 'styled-components'
import { fontFamily, colors } from 'css/theme'
import { Legend as RealLegend } from 'components/Legend/components/Legends'

export const CustomPopUpStyles = createGlobalStyle`
  .custom-popup .leaflet-popup-content-wrapper {
    border-radius: 4px;
    padding: 0;
    text-align: left;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  }

  .custom-popup .leaflet-popup-content {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .leaflet-container {
    font: 14px/1.5 "Helvetica Neue", Arial, Helvetica, sans-serif;
  }

  .leaflet-container a.leaflet-popup-close-button {
    font: 24px/24px Tahoma, Verdana, sans-serif;
  }
`

const StateName = styled.h6`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin: 0;
  padding: 12px;
  font-family: ${fontFamily};
  color: ${colors.black};

`

const Divider = styled.div`
  width: 100%;
  height: 3px;
  background: #F2F5FA;
`

const ItemsContainer = styled.div`
  display: flex;
  padding: 12px;
  box-sizing: border-box;
  > *:not(:first-child) {
    margin-left: 24px;

  }
`

export default { Divider, StateName, ItemsContainer }

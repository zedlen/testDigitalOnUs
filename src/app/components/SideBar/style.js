import styled from "styled-components";

export const SideBarContainer = styled.div`
    width: 260px;
    height: 100%;
    background: #fafafa;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
`;

export const SideBarMain = styled.div`
    margin: 35px;
`;

export const SideBarRow = styled.div`
    margin-top: 15px;   
    margin-bottom: 15px;   
    display: flex;
    flex-direction: row; 
    justify-content: center;
    align-items: center;
    &.active{
        background: white;
        padding-top: 15px;        
        padding-bottom: 15px;        
        margin: 0;    
        margin-left: -35px;
        margin-right: -35px;
        padding-left: 35px;
        padding-right: 35px;
    }
`;

export const SideBarLabel = styled.span`    
    flex: 1;
    color: #3e4d61;
    font-weight: bold;
`;

export const SideBarIcon = styled.img`
    width: 35px;
    height: 35px;
`;

export const SideBarDivider = styled.hr`
    border: solid .5px #3e4d61;
    margin-right: -35px;
    margin-bottom: 20px;
`;

export const SideBarClearText = styled.span`
    width: 100%;
    font-weight: lighter;
`;
import React from 'react'
import { 
    SideBarContainer, 
    SideBarRow, 
    SideBarLabel, 
    SideBarIcon, 
    SideBarMain, 
    SideBarDivider,
    SideBarClearText
} from './style'

export const SideBar = () => {
    return(
        <SideBarContainer>
            <SideBarMain>
                <SideBarRow>
                    <SideBarLabel>Label</SideBarLabel>
                    <SideBarIcon />
                </SideBarRow> 
                <SideBarRow className="active">
                    <SideBarLabel>Label</SideBarLabel>
                    <SideBarIcon />
                </SideBarRow> 
                <SideBarRow>
                    <SideBarLabel>Label</SideBarLabel>
                    <SideBarIcon />
                </SideBarRow>  
                <SideBarDivider />  
                <SideBarRow>
                    <SideBarClearText>Label</SideBarClearText>                                        
                </SideBarRow>  
                <SideBarRow>
                    <SideBarClearText>Label</SideBarClearText>                                        
                </SideBarRow>
            </SideBarMain>        
        </SideBarContainer>
    )
}
import styled from 'styled-components'
import { colors } from '../../global'

export const Container = styled.div`
   width: 8rem;
   height: 2.2rem;

   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 .3rem;

   border-radius: 20px;
   border: 1px solid rgba(118, 118, 118, .3);
   color: ${colors.lightColorLetters};

   cursor: pointer;

   p { 
       font-size: .75rem;
   }

   &:hover { 
       transform: scale(1.05);
   }

`
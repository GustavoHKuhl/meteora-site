import { useContext, useEffect, useMemo } from "react" ;
import {CarrinhoContext} from "@/context/CarrinhoContext"; 
import { ADD_PRODUTO, REMOVE_PRODUTO, UPDATE_QUANTIDADE } from "../reducers/carrinhoReducer"; 

const addProdutoAction = (novoProduto) =>({
  type: ADD_PRODUTO, 
  payload: novoProduto,
}); 

const removeProdutoAction = (ProdutoId) =>({
  type: REMOVE_PRODUTO, 
  payload: ProdutoId,
}); 

const updateProdutoAction = (ProdutoId, quantidade) =>({
  type: UPDATE_QUANTIDADE, 
  payload: {ProdutoId, quantidade}
});

export const useCarrinhoContext = () => {
    const{carrinho, dispatch, quantidade,  valorTotal, } = 
    useContext(CarrinhoContext) 
      
    function adicionarProduto(novoProduto){
       dispatch(addProdutoAction(novoProduto))
      } 
      
    
    function removerProduto(id){
        const produto = carrinho.find((item)=> item.id === produtoId);

        if(produto && produto.quantidade > 1){
          dispatch(updateProdutoAction(id,produto.quantidade - 1));
        }else{
          dispatch(removeProdutoAction(id))
        }
    } 

    function removerProdutoCarrinho(id){
     dispatch(removeProdutoAction(id));
    } 
  
      return{
        carrinho, 
        adicionarProduto, 
        removerProduto, 
        removerProdutoCarrinho, 
        valorTotal, 
        quantidade,
    }; 
  }
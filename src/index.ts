import axios from 'axios'
import dotenv from 'dotenv'
import {ProductData} from './model/ProductData'

dotenv.config();

const token: string = process.env.TOKEN;

const modelCode: string = process.argv[2].slice(27, (process.argv[2].indexOf(".html")+5))

const apiUrl: string = `${process.env.API_URL}${modelCode}`


const getData = async(url: string): Promise<ProductData> => {
    try {
        const response = await axios.get(url, {headers: {Authorization: token}})

        const titulo = response.data.disponibilidade.nome;

        const preco = response.data.precos[0].valor;
        
        const cor: string = process.argv[2].slice((process.argv[2].indexOf("cor=") + 4), -1);

        const imagens = cor.length === 2 ? response.data.imagens.find((modelo: any) => (modelo.codigoCor === cor)) : response.data.imagens[0];

        const imagem = imagens.urls.find((img: any) => (img.resolucao === "500x500" && img.principal === true)).url;

        const cores = response.data.disponibilidade.cores.filter((cor: any) => (cor.situacao === "available"))

        const coresDisponiveis = cores.map((cor: any) => {
            return cor.nomeCor
        })

        return {
            titulo,
            preco,
            imagem,
            coresDisponiveis
        }    
    } catch (error) {
        throw new Error(error)
    }
}

getData(apiUrl).then(response => console.log(response));
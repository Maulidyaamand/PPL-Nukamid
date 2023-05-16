import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import axios from "axios";

export default class SearchesController {


public async index({view, request}: HttpContextContract) {
    const query=request.input('sm-input')
    
    
        let findMovie = await axios.get(
                `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=c7c704a0a0bf422b1b19d3fdec8e6f1d&language=en-US&page=1&include_adult=false`
            );
            findMovie = findMovie.data.results;
            console.log ()
            return view.render('page/search', {query, findMovie})
        }

        
        
    }
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Cep;

class CepController extends Controller
{
    public function index(Request $request) {
        
        if(!app('redis')->get('cache_cep'.$request['cep'])) {
            $url = 'viacep.com.br/ws/'.$request['cep'].'/json/';
            $curl = curl_init();
            curl_setopt($curl, CURLOPT_URL, $url);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_HEADER, false);
            $data = curl_exec($curl);
            curl_close($curl);
            app('redis')->set('cache_cep'.$request['cep'], $data);

            $body = json_decode($data);
            $bodyDatabaseCep = [
                'street' => $body->logradouro,
                'district' => $body->bairro,
                'city' => $body->localidade,
                'state'=> $body->uf
            ];

            Cep::insert($bodyDatabaseCep);

        } else {
            $data = app('redis')->get('cache_cep'.$request['cep']);
        }

        return $data;
    }
}
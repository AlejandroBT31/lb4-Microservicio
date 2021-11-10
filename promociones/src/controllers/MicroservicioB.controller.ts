// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {get, param} from '@loopback/rest';



export class MicroservicioBController { //MicrobController
  constructor() {}

  @get('/PrecioFinal/{Zona}/{precioInicial}/{metodoPago}/{coupon}/{costoEnvio}')//objeto
  async getEstado(
    //meterlo  dentro de un objeto
    @param.path.string('Zona') Zona: string,
    @param.path.number('precioInicial') precioInicial: number,
    @param.path.string('metodoPago') metodoPago: string,
    @param.path.string('coupon') Coupon: string,
    @param.path.number('costoEnvio') costoenvio: number
  ): Promise<object> {
    let desc = 0;
    let precio = precioInicial;
    let precioFinal = 0;
    let costoEnvio = costoenvio;
    let precioTotal = 0;

    if((Zona == "zona1" || Zona == "zona2") && metodoPago == "paypal" && Coupon == "MASTER20")
    {
      precioTotal =  precio + costoEnvio;
      desc = precioTotal *.15;
      precioFinal = precioTotal - desc;
    }
    else if ((Zona == "zona1" || Zona == "zona2") && metodoPago == "mastercard" && Coupon == "MASTER20")
    {
      precioTotal = precio + costoEnvio;
      desc = precioTotal * .20;
      precioFinal = precioTotal - desc;
    }
    else 
    {
      precioFinal = precio;
    }
    //2 Setencia
    if (Zona == "zona5" && metodoPago== "mastercard")
    {
      precioTotal = precio + costoEnvio;
      desc = precioTotal * .10;
      precioFinal = precioTotal - desc;
    }

    if(Zona == "zona3" && precio > 4000 && metodoPago== "visa")
    {
      precioTotal = precio * costoEnvio;
      desc = precioTotal * .15;
      precioFinal = precioTotal - desc;
    }

    if (Zona == "zona1" && precio > 3000 && metodoPago == "mastercard")
    {
      precioTotal = precio + costoenvio;
      desc = precioTotal * .10;
      precioFinal = precioTotal - desc;
    }

    if (precio > 10000)
    {
      precioTotal = precio + costoenvio;
      precioFinal = precio - costoenvio
    }

    if ((Zona == "zona1" || Zona == "zona2" || Zona == "zona3") && metodoPago == "visa" || metodoPago== "mastercard" && Coupon == "PERRITOFELI")
   {
    precioTotal = precio + costoenvio;
    desc = precioTotal * .15;
    precioFinal = precioTotal - desc;
   }

   if ((Zona == "zona4" || Zona == "zona5" ) &&  Coupon == "NOJADO")
   {
    precioTotal = precio + costoenvio;
    desc = precioTotal * .10;
    precioFinal = precioTotal - desc;
   }

    let res = {
      //"precio": precio,
      "precioFinal": precioFinal
      //"descuento": desc,
      //"costoEnvio": costoEnvio
    }
    
    return res;
  }
}

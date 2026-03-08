import React, { useState, useEffect } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';

export default function GoogleMapsComponent() 
{
  // Coordenadas do local
  const position = { lat: -22.88801445883487, lng: -48.43223924232831 };
  
  // Estado para controlar a janela de informações
  const [open, setOpen] = useState(false);
  //Hook  que cria a referência (o link) entre o Marcador e a Janela
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [zoom, setZoom] = useState(15);
  useEffect(() => 
  {
    const handleResize = () => 
    {
      const width = window.innerWidth;

      if (width >= 1800) setZoom(17);
      else if (width >= 1024) setZoom(16);
      else if (width >= 768) setZoom(15);
      else setZoom(15);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (

    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      
      <div className="my-6 w-full h-100 rounded-xl overflow-hidden shadow-lg shadow-black/40 meio:h-120 meio:my-10 laptop:h-140 4k:h-180 grande:h-220">
        
        <Map
          defaultCenter={position}
          zoom={zoom}
          onZoomChanged={(ev) => setZoom(ev.detail.zoom)}
          mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID || "DEMO_MAP_ID"}
          options={{
            disableDefaultUI: false, // Mantém controles de zoom/street view
            zoomControl: true,
          }}
        >
          
            {/* Marcador Avançado (Pin Vermelho padrão) */}
            <AdvancedMarker 
                ref={markerRef}
                position={position} 
                onClick={() => setOpen(!open)}
            >
            <Pin background={'#EA4335'} glyphColor={'#fff'} borderColor={'#B31412'} />
          </AdvancedMarker>

          <InfoWindow
              anchor={marker}
              onCloseClick={() => setOpen(false)} // Ao clicar no X, fecha
              maxWidth={200} 
            >
              {/* Conteúdo HTML/Tailwind dentro da janela */}
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Jardim Florescer</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Rua Capitão Andrade, 519 <br/>
                  Bairro Alto, Botucatu - SP
                </p>
              </div>
            </InfoWindow>

        </Map>
      </div>
    </APIProvider>
  );
}
import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import relogioImagem from "../../../assets/img/cronometro.png";

export default function Cronometro() {
  const [timer, setTimer] = useState(0);
  const [inicia, setInicia] = useState(false);
  const [ultimoTempo, setUltimo] = useState(null);
  let interval;

  useEffect(() => {
    if (inicia) {
      interval = setInterval(() => {
        setTimer((numeroAtual) => numeroAtual + 0.1);
      }, 100);
    }
    return () => {
      clearInterval(interval)
      setUltimo(timer.toFixed(1))
    }; // Limpar o intervalo quando o componente for desmontado
  }, [inicia]);

  function iniciar() {
    setInicia(!inicia);
  }

  function limpar() {
    setInicia(false);
    clearInterval(interval);
    setTimer(0);
  }

  return (
    <View style={estilos.container}>
      <Image source={relogioImagem} style={estilos.imagem} />
      <Text style={estilos.timer}>{timer.toFixed(1)}</Text>
      <View style={estilos.viewDois}>
        <TouchableOpacity style={estilos.btn} onPress={iniciar}>
          <Text style={estilos.btnTexto}>
            {inicia == false ? "Iniciar" : "Pausar"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.btn} onPress={limpar}>
          <Text style={estilos.btnTexto}>Limpar</Text>
        </TouchableOpacity>
        <Text style={estilos.ultimoTempo}>
          {ultimoTempo != null ? `Ultimo tempo: ${ultimoTempo}` : "Teste:"}
        </Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00aeef",
    gap: 20,
  },
  imagem: {
    width: 250,
    height: 290,
  },
  timer: {
    color: "white",
    fontSize: 50,
    marginTop: -175,
    fontWeight: "bold",
  },
  btn: {
    borderRadius: 100,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 2,
    width: 300,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTexto: {
    color: "white",
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  viewDois: {
    gap: 20,
    marginTop: 120,
  },
  ultimoTempo: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

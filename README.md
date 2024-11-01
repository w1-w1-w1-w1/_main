<div align="center">
  <table>
    <tr>
      <td>
        <img src="baby.gif" width="400" autoplay style="border: 3px solid; border-image: linear-gradient(45deg, purple, orange) 1;">
      </td>
    </tr>
  </table>
  
  <!-- Добавляем анимированный текст -->
  <div class="glitch-text">номер один</div>
</div>

<style>
.glitch-text {
    font-size: 48px;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    text-shadow: 0.05em 0 0 #00fffc,
                -0.03em -0.04em 0 #fc00ff,
                 0.025em 0.04em 0 #fffc00;
    animation: glitch 725ms infinite;
}

@keyframes glitch {
    0% {
        text-shadow: 0.05em 0 0 #00fffc,
                    -0.03em -0.04em 0 #fc00ff,
                     0.025em 0.04em 0 #fffc00;
    }
    15% {
        text-shadow: 0.05em 0 0 #00fffc,
                    -0.03em -0.04em 0 #fc00ff,
                     0.025em 0.04em 0 #fffc00;
    }
    16% {
        text-shadow: -0.05em -0.025em 0 #00fffc,
                     0.025em 0.035em 0 #fc00ff,
                    -0.05em -0.05em 0 #fffc00;
    }
    49% {
        text-shadow: -0.05em -0.025em 0 #00fffc,
                     0.025em 0.035em 0 #fc00ff,
                    -0.05em -0.05em 0 #fffc00;
    }
    50% {
        text-shadow: 0.05em 0.035em 0 #00fffc,
                    0.03em 0 0 #fc00ff,
                    0 -0.04em 0 #fffc00;
    }
    99% {
        text-shadow: 0.05em 0.035em 0 #00fffc,
                    0.03em 0 0 #fc00ff,
                    0 -0.04em 0 #fffc00;
    }
    100% {
        text-shadow: -0.05em 0 0 #00fffc,
                    -0.025em -0.04em 0 #fc00ff,
                    -0.04em -0.025em 0 #fffc00;
    }
}
</style>

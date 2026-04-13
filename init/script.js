

function proofButton() {
    
    const btn = document.getElementById('btn-green');

    if (!btn) {
        alert("sos boludo"); 
        return;
    }

    const cont = document.querySelector('.cont-modal');

    btn.addEventListener('click', () => {
        /*
        if (cont.dataset.state === 'open') {
            cont.dataset.state = 'closed';
        } else {
            cont.dataset.state = 'open';
        } */

        cont.dataset.state = (cont.dataset.state === 'open') ? 'closed' : 'open'; 
    });


    
}


function initModal() {
    // ========== PASO 1: Obtener referencias a los elementos ==========
    
    // Botón que abre el modal
    const btn = document.getElementById('btn-green');
    
    // Overlay (fondo oscuro) que contiene el modal
    const modalOverlay = document.getElementById('modalOverlay');
    
    // Botones para cerrar el modal
    const closeBtn = document.getElementById('closeBtn');  // Botón "Cerrar"
    const closeX = document.getElementById('closeX');      // Botón "X"
    
    // ========== PASO 2: Validar que los elementos existan ==========
    
    if (!btn) {
        console.error("No se encontró el botón con id 'btn-green'");
        return;
    }
    
    if (!modalOverlay) {
        console.error("No se encontró el overlay del modal");
        return;
    }
    
    // ========== PASO 3: Función para ABRIR el modal ==========
    function openModal() {
        // Agregamos la clase 'active' al overlay
        // Esto hace que el modal se muestre (gracias al CSS)
        modalOverlay.classList.add('active');
        
        // Opcional: Prevenir scroll del body mientras el modal está abierto
        document.body.style.overflow = 'hidden';
        
        console.log('Modal abierto'); // Para debugging
    }
    
    // ========== PASO 4: Función para CERRAR el modal ==========
    function closeModal() {
        // Removemos la clase 'active' del overlay
        // Esto oculta el modal (gracias al CSS)
        modalOverlay.classList.remove('active');
        
        // Restauramos el scroll del body
        document.body.style.overflow = '';
        
        console.log('Modal cerrado'); // Para debugging
    }
    
    // ========== PASO 5: Configurar los event listeners ==========
    
    // Evento 1: Click en el botón -> abre el modal
    btn.addEventListener('click', openModal);
    
    // Evento 2: Click en el botón "Cerrar" -> cierra el modal
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Evento 3: Click en la "X" -> cierra el modal
    if (closeX) {
        closeX.addEventListener('click', closeModal);
    }
    
    // Evento 4: Click en el overlay (fondo oscuro) -> cierra el modal
    // Esto es una buena práctica de UX: clickear fuera del modal lo cierra
    modalOverlay.addEventListener('click', function(event) {
        // Verificamos que el click fue DIRECTAMENTE en el overlay (fondo)
        // y NO en el contenido del modal (.cont-modal)
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Evento 5: Tecla ESC -> cierra el modal
    document.addEventListener('keydown', function(event) {
        // Si la tecla presionada es ESC (código 27) y el modal está abierto
        if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}

// ========== PASO 6: Inicializar todo cuando el DOM esté listo ==========
// Esperamos a que el HTML termine de cargar antes de ejecutar el código
document.addEventListener('DOMContentLoaded', initModal);


/*
document.addEventListener("DOMContentLoaded", () => {
    proofButton();
});
*/



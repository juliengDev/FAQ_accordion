class AccordionComponent {
  private readonly accordion: HTMLElement;
  private readonly buttons: NodeListOf<HTMLButtonElement>;

  constructor(selector: string) {
    this.accordion = document.querySelector(selector) as HTMLElement;
    if (!this.accordion) {
      throw new Error(
        `L'élément accordion "${selector}" n'a pas été trouvé dans le DOM.`
      );
    }
    this.buttons = this.accordion.querySelectorAll("button");
    this.init();
  }

  private init(): void {
    this.accordion.addEventListener("click", this.handleAccordionClick);
    this.initPanels();
  }

  private initPanels(): void {
    this.buttons.forEach((btn) => {
      const panelId = btn.getAttribute("aria-controls");
      if (!panelId) return;
      const panel = document.getElementById(panelId);
      if (!panel) return;

      if (btn.getAttribute("aria-expanded") === "false") {
        panel.classList.remove("visible");
        panel.style.maxHeight = "0px";
      } else {
        panel.classList.add("visible");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  private handleAccordionClick = (event: Event): void => {
    const button = (event.target as HTMLElement).closest("button");
    if (!button || !this.accordion.contains(button)) return;

    const isExpanded = button.getAttribute("aria-expanded") === "true";
    this.toggleAccordion(button, !isExpanded);
  };

  private toggleAccordion(button: HTMLButtonElement, expand: boolean): void {
    const panelId = button.getAttribute("aria-controls");
    if (!panelId) return;
    const panel = document.getElementById(panelId);
    if (!panel) return;

    button.setAttribute("aria-expanded", expand.toString());

    if (expand) {
      panel.classList.add("visible");
      panel.style.maxHeight = "1000px";
      panel.removeAttribute("hidden");
      panel.setAttribute("aria-hidden", "false");
    } else {
      panel.classList.remove("visible");
      panel.style.maxHeight = "0px";
      panel.setAttribute("aria-hidden", "true");
    }

    // Gestion des icônes
    const iconPlus = button.querySelector(".icon-plus") as HTMLImageElement;
    const iconMinus = button.querySelector(".icon-minus") as HTMLImageElement;

    if (iconPlus && iconMinus) {
      iconPlus.classList.toggle("hidden", expand);
      iconMinus.classList.toggle("hidden", !expand);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new AccordionComponent(".accordion");
});

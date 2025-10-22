import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../service/layout.service';
import { ConfiguratorComponent } from '../configurator/configurator.component';

@Component({
  selector: 'app-floating-configurator',
  standalone: true,
  imports: [CommonModule, ButtonModule, StyleClassModule, ConfiguratorComponent],
  templateUrl: './floating-configurator.component.html',
  styleUrl: './floating-configurator.component.scss'
})
export class FloatingConfiguratorComponent {
    layoutService = inject(LayoutService);

    isDarkTheme = computed(() => this.layoutService.layoutConfig().darkTheme);

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state: any) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}

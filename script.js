/**
 * أعمال الدهانات والديكورات بالرياض - Master JavaScript
 * Vanilla JS | CRO Optimized | Smart WhatsApp Lead Form | Auto Injected CTAs
 */

(function () {
  'use strict';

  // 1. ثوابت وبيانات المشروع
  const CLIENT_PHONE = '0576305985';
  const CLIENT_PHONE_INTL = '966576305985';
  const DEVELOPER_PHONE = '0578539687';
  const DEVELOPER_PHONE_INTL = '966578539687';

  // 2. دالة تتبع التحويل الآمن للإعلانات (Google Ads & Analytics Tracking)
  function trackConversion(actionName, label) {
    try {
      if (typeof gtag === 'function') {
        gtag('event', 'conversion', {
          'event_category': 'Engagement',
          'event_action': actionName,
          'event_label': label || 'Client Contact'
        });
      }
      if (typeof fbq === 'function') {
        fbq('track', 'Contact');
      }
    } catch (e) {
      console.warn('Tracking script error bypassed:', e);
    }
  }

  // 3. حقن أزرار الاتصال والواتساب العائمة تلقائياً في جميع الصفحات
  function injectFloatingActionButtons() {
    // حاوية الزرين أسفل اليمين
    const floatingRight = document.createElement('div');
    floatingRight.className = 'floating-actions-right';
    floatingRight.setAttribute('aria-label', 'أزرار التواصل السريع');

    // زر الواتساب العائم
    const waLink = document.createElement('a');
    waLink.href = `https://wa.me/${CLIENT_PHONE_INTL}?text=${encodeURIComponent('السلام عليكم، أود الاستفسار عن خدمات الدهانات والديكورات في الرياض.')}`;
    waLink.className = 'floating-btn floating-btn-whatsapp';
    waLink.setAttribute('target', '_blank');
    waLink.setAttribute('rel', 'noopener noreferrer');
    waLink.setAttribute('aria-label', 'تواصل عبر واتساب');
    waLink.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zM12.05 20.21c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.44c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.68 8.29-8.43 8.29zm4.52-6.19c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.2 3.7.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.3z"/>
      </svg>
    `;
    waLink.addEventListener('click', function () {
      trackConversion('WhatsApp_Click', 'Floating_WhatsApp');
    });

    // زر الاتصال الهاتفي العائم
    const callLink = document.createElement('a');
    callLink.href = `tel:${CLIENT_PHONE}`;
    callLink.className = 'floating-btn floating-btn-call';
    callLink.setAttribute('aria-label', 'اتصال هاتفي مباشر');
    callLink.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    `;
    callLink.addEventListener('click', function () {
      trackConversion('Call_Click', 'Floating_Call');
    });

    floatingRight.appendChild(waLink);
    floatingRight.appendChild(callLink);
    document.body.appendChild(floatingRight);

    // زر الصعود للأعلى أسفل اليسار
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.setAttribute('aria-label', 'الرجوع للأعلى');
    scrollTopBtn.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    `;
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 350) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. إدارة القائمة الجانبية للجوال وقوائم الأكورديون
  function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebarServicesToggle = document.getElementById('sidebarServicesToggle');
    const sidebarSubmenu = document.getElementById('sidebarSubmenu');

    if (menuToggle && mobileSidebar) {
      menuToggle.addEventListener('click', function () {
        mobileSidebar.classList.add('open');
      });
    }

    if (sidebarClose && mobileSidebar) {
      sidebarClose.addEventListener('click', function () {
        mobileSidebar.classList.remove('open');
      });
    }

    if (sidebarServicesToggle && sidebarSubmenu) {
      sidebarServicesToggle.addEventListener('click', function (e) {
        e.preventDefault();
        sidebarSubmenu.classList.toggle('active');
        const arrow = sidebarServicesToggle.querySelector('.arrow-icon');
        if (arrow) {
          arrow.style.transform = sidebarSubmenu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
      });
    }
  }

  // 5. إدارة نموذج الحجز الذكي وتحويله إلى واتساب مع التتبع
  function initSmartForms() {
    const quoteForms = document.querySelectorAll('.smart-lead-form');

    quoteForms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameInput = form.querySelector('[name="client_name"]');
        const phoneInput = form.querySelector('[name="client_phone"]');
        const serviceInput = form.querySelector('[name="service_type"]');
        const districtInput = form.querySelector('[name="district"]');
        const detailsInput = form.querySelector('[name="details"]');

        const name = nameInput ? nameInput.value.trim() : 'غير محدد';
        const phone = phoneInput ? phoneInput.value.trim() : 'غير محدد';
        const service = serviceInput ? serviceInput.value.trim() : 'طلب معاينة وتكلفة';
        const district = districtInput ? districtInput.value.trim() : 'الرياض';
        const details = detailsInput ? detailsInput.value.trim() : 'لا توجد تفاصيل إضافية';

        // إرسال حدث التحويل لجوجل
        trackConversion('Form_Submission', `Lead_${service}`);

        // تجهيز نص رسالة الواتساب المهيأة
        const whatsappMsg = 
          `*طلب معاينة وعرض سعر جديد*\n` +
          `-------------------------------\n` +
          `👤 *الاسم:* ${name}\n` +
          `📱 *رقم الجوال:* ${phone}\n` +
          `🛠️ *الخدمة المطلوبة:* ${service}\n` +
          `📍 *الحي / المنطقة:* ${district}\n` +
          `📝 *التفاصيل:* ${details}\n` +
          `-------------------------------\n` +
          `_تم الإرسال عبر النموذج الذكي في الموقع الإلكتروني_`;

        const finalUrl = `https://wa.me/${CLIENT_PHONE_INTL}?text=${encodeURIComponent(whatsappMsg)}`;

        // فتح الواتساب مباشرة
        window.open(finalUrl, '_blank');
        form.reset();
      });
    });
  }

  // 6. استثناء روابط المطور من التتبع الإعلاني والتأكد من تتبع باقي الروابط
  function sanitizeTrackingLinks() {
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(function (link) {
      const href = link.getAttribute('href') || '';
      
      // إذا كان الرابط يخص المطور، نمنع التتبع
      if (href.includes(DEVELOPER_PHONE) || href.includes(DEVELOPER_PHONE_INTL)) {
        link.addEventListener('click', function (e) {
          e.stopPropagation();
        });
        return;
      }

      // إذا كان اتصال عادي بالعميل
      if (href.startsWith(`tel:${CLIENT_PHONE}`)) {
        link.addEventListener('click', function () {
          trackConversion('Call_Click', 'Header_Or_Body_Call');
        });
      }

      // إذا كان رابط واتساب خاص بالعميل
      if (href.includes(`wa.me/${CLIENT_PHONE_INTL}`) || href.includes(`phone=${CLIENT_PHONE_INTL}`)) {
        link.addEventListener('click', function () {
          trackConversion('WhatsApp_Click', 'Body_WhatsApp');
        });
      }
    });
  }

  // 7. إدارة الأكورديون للأسئلة الشائعة
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
      const questionBtn = item.querySelector('.faq-question');
      if (questionBtn) {
        questionBtn.addEventListener('click', function () {
          const isActive = item.classList.contains('active');
          faqItems.forEach(i => i.classList.remove('active'));
          if (!isActive) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  // تهيئة النظام عند اكتمال تحميل DOM
  document.addEventListener('DOMContentLoaded', function () {
    injectFloatingActionButtons();
    initMobileMenu();
    initSmartForms();
    initFaqAccordion();
    sanitizeTrackingLinks();
  });

})();
